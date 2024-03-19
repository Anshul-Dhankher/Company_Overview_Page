# Company Overview

This Component will be the root component for the company overview page where the data will be fetched from backend which different details like governmental status (authority/operating status), what type of freight they specialize in, their hours of operations, contacts, and additional information.

### Component Name - `<CompanyOverview />`

This component will be the parent component for others and the data will flow as below :-

- CompanyOverview
  - ProfileInfo
    - HeaderInfoPanel
    - RateCarrierCard
    - ImageGallery
    - Specialties
    - DirectoryInfo
    - Contacts
  - CarrierInfo
    - SmartRecommendation
    - CarrierOnboarding
    - Assessment
    - Equipment
    - StatisticInfo (3 occurance with different props for inspections, violations, crashes)
    - InsuranceFilling
    - Associations

Typescript Types

```ts
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
  onboarding: Onboarding;
  assessment: Assessment;
  equipment: Equipment;
  inspections: StatisticInfo;
  violations: StatisticInfo;
  crashes: StatisticInfo;
  insurance: Insurance;
  associations: Association[];
};
```

Component Logic and props passing

```tsx
export const CompanyOverview = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();

  useEffect(() => {
    /*
    API call to back for fetching companyInfo from backend.
    call.then(setCompanyInfo(data)).catch().finally();
    */
  }, []);

  return (
    <div className="company-overview">
      <ProfileInfo
        lastBookingDate={companyInfo.lastBookingDate}
        headerInfo={companyInfo.headerInfo}
        specialties={companyInfo.specialties}
        directoryInfo={companyInfo.directoryInfo}
        contacts={companyInfo.contacts}
      />
      <CarrierInfo
        recommendation={companyInfo.recommendation}
        onboarding={companyInfo.onboarding}
        assessment={companyInfo.assessment}
        equipment={companyInfo.equipment}
        inspections={companyInfo.inspections}
        violations={companyInfo.violations}
        crashes={companyInfo.crashes}
        insurance={companyInfo.insurance}
        associations={companyInfo.associations}
      />
    </div>
  );
};
```
