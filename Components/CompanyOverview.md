# Company Overview

This Component will be the root component for the company overview page where the data will be fetched from backend which different details like governmental status (authority/operating status), what type of freight they specialize in, their hours of operations, contacts, and additional information.

### Component Name - `<CompanyOverview />`

This component will be the parent component for others and the data will flow as below :-

- CompanyOverview
  - [ProfileInfo](/Components/ProfileInfo/index.md)
    - [HeaderInfoPanel](/Components/ProfileInfo/HeaderInfoPanel.md)
    - [RateCarrierCard](/Components/ProfileInfo/RateCarrierCard.md)
    - [ImageGallery](/Components/ProfileInfo/ImageGallery.md)
    - [Specialties](/Components/ProfileInfo/Specialties.md)
    - [DirectoryInfo](/Components/ProfileInfo/Specialties.md)
    - [Contacts](/Components/ProfileInfo/Contacts.md)
  - [CarrierInfo](/Components//CarrierInfo/index.md)
    - [SmartRecommendation](/Components/CarrierInfo/SmartRecommendation.md)
    - [CarrierOnboarding](/Components/CarrierInfo/CarrierOnboarding.md)
    - [Assessment](/Components/CarrierInfo/Assessment.md)
    - [Equipment](/Components/CarrierInfo/Equipment.md)
    - [StatisticInfo](/Components/CarrierInfo/StatisticInfo.md) (3 occurance with different props for inspections, violations, crashes)
    - [InsuranceFilling](/Components/CarrierInfo/InsuranceFilling.md)
    - [Associations](/Components/CarrierInfo/Associations.md)

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

```ts
interface IProps {
  id: String;
}
```

```tsx
export const CompanyOverview = (props: IProps) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();

  useEffect(() => {
    /*
    API call to back for fetching companyInfo from backend.
    call(id).then(setCompanyInfo(data)).catch().finally();
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
