// types/formidable.d.ts
import 'formidable';

declare module 'formidable' {
  interface IncomingForm {
    keepExtensions?: boolean; // Add the keepExtensions property
  }
}
