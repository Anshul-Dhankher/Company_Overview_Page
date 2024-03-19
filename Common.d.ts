export type StatusInfo = {
  name: String;
  isValid: Boolean;
};

export type CompanyHeaderInfo = {
  authority: StatusInfo;
  operatingStatus: StatusInfo;
  authorityAge: Date;
};

export type DirectoryInfo = {
  opensAt: Date;
  closesAt: Date;
  phone: String;
  address: String;
  website: String;
};

export type Contact = {
  id: String;
  name: String;
  workAt: String;
  phone: String;
  gate: String;
};

export type Recommendation = {
  isRecommended: Boolean;
  description: String;
};

export type Onboarding = {
  isCarrierSetupWithCompany: Boolean;
  isCarrierChaineVerified: Boolean;
};

export type Assessment = {
  isOperatingStatusActive: Boolean;
  isAuthorityActive: Boolean;
  isInsuranceActive: Boolean;
  isInspectedWithin24Months: Boolean;
  isSafetyRatingAcceptable: Boolean;
  is8YearsAuthorize: Boolean;
};

export type Equipment = {
  powerUnits: Number;
  trailers: Number;
  reefers: Number;
};

export type StatisticInfo = {
  withinYears: Number;
  total: Number;
};

export type Insurance = {
  insurer: String;
  isActive: Boolean;
  policyNumber: String;
  coverage: Number;
  effectiveDate: Date;
  cancellationDate: Date;
};

export type Association = {
  id: String;
  name: String;
  designation: String;
  profilePictureUrl: String;
};

export type CompanyInfo = {
  id: String;
  name: String;
  lastBookingDate: Date;
  headerInfo: CompanyHeaderInfo;
  imageGallery: String[];
  specialties: String[];
  directoryInfo: DirectoryInfo;
  contacts: Contact[];
  recommendation: Recommendation;
  onBoarding: Onboarding;
  assessment: Assessment;
  equipment: Equipment;
  inspections: StatisticInfo;
  violations: StatisticInfo;
  crashes: StatisticInfo;
  insurance: Insurance;
  associations: Association[];
};
