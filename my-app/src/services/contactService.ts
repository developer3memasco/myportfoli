import { connectToDatabase } from "@/lib/mongodb";
import { ContactMessage, IContactMessage } from "@/models/ContactMessage";

export interface CreateContactDTO {
  name: string;
  email: string;
  projectType?: string;
  budget?: string;
  message: string;
}

export interface ContactServiceResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    email: string;
    projectType?: string;
    budget?: string;
    message: string;
    createdAt: Date;
  };
  error?: string;
}

/**
 * Service function to validate and persist contact form submissions into MongoDB
 * @param formData Contact form fields (name, email, projectType, budget, message)
 * @returns Standardized service response containing saved document details or error message
 */
export async function createContactMessage(
  formData: CreateContactDTO
): Promise<ContactServiceResponse> {
  try {
    const { name, email, projectType, budget, message } = formData;

    // Input validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return {
        success: false,
        message: "Validation failed",
        error: "Name is required.",
      };
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return {
        success: false,
        message: "Validation failed",
        error: "Email is required.",
      };
    }

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email.trim())) {
      return {
        success: false,
        message: "Validation failed",
        error: "Please provide a valid email address.",
      };
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return {
        success: false,
        message: "Validation failed",
        error: "Message is required.",
      };
    }

    // Ensure database connection
    await connectToDatabase();

    // Create and save document in MongoDB
    const newDoc: IContactMessage = await ContactMessage.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      projectType: projectType?.trim() || "Full Stack Web Application",
      budget: budget?.trim() || "$1k - $5k",
      message: message.trim(),
    });

    return {
      success: true,
      message: "Contact inquiry saved successfully to MongoDB.",
      data: {
        id: newDoc._id.toString(),
        name: newDoc.name,
        email: newDoc.email,
        projectType: newDoc.projectType,
        budget: newDoc.budget,
        message: newDoc.message,
        createdAt: newDoc.createdAt,
      },
    };
  } catch (error: unknown) {
    console.error("❌ Error in createContactMessage service:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to save contact message to database.";

    return {
      success: false,
      message: "Database operation failed",
      error: errorMessage,
    };
  }
}

/**
 * Service function to retrieve all contact inquiries or count
 */
export async function getAllContactMessages(limit = 50) {
  try {
    await connectToDatabase();
    const messages = await ContactMessage.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    const count = await ContactMessage.countDocuments();

    return {
      success: true,
      totalCount: count,
      data: messages,
    };
  } catch (error: unknown) {
    console.error("❌ Error fetching contact messages:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch contact inquiries.";
    return {
      success: false,
      error: errorMessage,
    };
  }
}
