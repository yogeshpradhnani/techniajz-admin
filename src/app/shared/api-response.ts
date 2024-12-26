export interface AdminSession {
  lastUpdatedAt: string;
  sessionExpires: string;
}

export interface ApiResponse {
  admin: AdminSession;
  data: any;
  errorCode: number;
  message: string;
  success:boolean;
  permissionStatus:any;
}
