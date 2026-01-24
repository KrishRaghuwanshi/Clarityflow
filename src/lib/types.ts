// Shared TypeScript types for API requests and responses

// ============================================
// Dashboard Types
// ============================================
export interface DashboardMetrics {
  activeUsers: number;
  conversionRate: number;
  dropoffPercentage: number;
  avgSessionDuration: number;
}

export interface FunnelStep {
  step: string;
  users: number;
  conversionRate: number;
  dropoff: number;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  effort: string;
  type: 'drop-off' | 'performance' | 'conversion';
}

export interface TimeSeriesDataPoint {
  date: string;
  users: number;
  conversions: number;
}

export interface DashboardData {
  metrics: DashboardMetrics;
  funnelSteps: FunnelStep[];
  insights: Insight[];
  timeSeriesData: TimeSeriesDataPoint[];
}

// ============================================
// Booking Types
// ============================================
export interface BookingRequest {
  name: string;
  email: string;
  company: string;
  teamSize?: string;
  message?: string;
}

export interface BookingResponse {
  success: boolean;
  bookingId: string;
  message: string;
}

// ============================================
// Contact Types
// ============================================
export interface ContactRequest {
  name: string;
  email: string;
  company: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  ticketId: string;
  message: string;
}

// ============================================
// Authentication Types
// ============================================
export interface SignInRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignInResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

// ============================================
// Checkout Types
// ============================================
export interface CheckoutRequest {
  planName: 'Starter' | 'Growth' | 'Team';
  billingCycle: 'monthly' | 'annual';
  email?: string;
}

export interface CheckoutResponse {
  success: boolean;
  checkoutUrl: string;
  sessionId: string;
}

// ============================================
// Newsletter Types
// ============================================
export interface NewsletterRequest {
  email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message: string;
  alreadySubscribed?: boolean;
}

// ============================================
// Blog Types
// ============================================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content?: string;
}

export interface BlogPostsResponse {
  posts: BlogPost[];
  total: number;
}

// ============================================
// Careers Types
// ============================================
export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description?: string;
}

export interface JobApplicationRequest {
  name: string;
  email: string;
  positionId: string;
  positionTitle: string;
  resumeUrl?: string;
  coverLetter?: string;
  linkedIn?: string;
}

export interface JobApplicationResponse {
  success: boolean;
  applicationId: string;
  message: string;
}

// ============================================
// Help Types
// ============================================
export interface HelpSearchResult {
  type: 'faq' | 'article';
  category: string;
  question?: string;
  answer?: string;
  title?: string;
  excerpt?: string;
}

export interface HelpSearchResponse {
  results: HelpSearchResult[];
  query: string;
  total: number;
}

// ============================================
// API Error Response
// ============================================
export interface ApiError {
  success: false;
  error: string;
  code?: string;
}
