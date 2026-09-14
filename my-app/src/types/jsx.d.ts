// Explicitly declare or augment JSX intrinsic elements so TypeScript always resolves HTML tags
import "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
