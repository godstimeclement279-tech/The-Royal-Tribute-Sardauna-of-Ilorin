export interface TributeImage {
  id: string;
  url: string;
  title: string;
  subtitle?: string;
  caption?: string;
  aspectRatio?: string;
}

export interface CeoSignatureState {
  signatureUrl: string | null;
  uploadedAt?: string;
}
