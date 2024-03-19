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
  equipments: Equipments;
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
        equipments={companyInfo.equipments}
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

Common Utils

```ts
//Logic to convert a timeStamp/Date into a human readable.
export const getYearsAgo = (date: Date) => {
  const currentTime = new Date();
  const timeDiff = currentTime.valueOf() - date.valueOf();
  const seconds = Math.floor(timeDiff / 1000);

  let result = "";

  if (seconds < 60) {
    result = `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    result = `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    result = `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (seconds < 2592000) {
    // 30 days
    const days = Math.floor(seconds / 86400);
    result = `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (seconds < 31536000) {
    // 365 days
    const months = Math.floor(seconds / 2592000); // 30 * 24 * 60 * 60
    result = `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(seconds / 31536000); // 365 * 24 * 60 * 60
    result = `${years} year${years !== 1 ? "s" : ""} ago`;
  }
  return result;
};

//checking is the value is defined or not
export const isDefined = <T>(value: T | undefined | null): value is T => {
  if (value === null) {
    return false;
  }
  if (value === undefined) {
    return false;
  }
  if ((typeof value).toLowerCase() === "number") {
    if (value === Infinity || value === -Infinity) return false;

    return !isNaN(value as number);
  }
  return true;
};
```

Common CSS

```css
.company-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  height: 100%;
  width: 100%;
}

.overview-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.info-card {
  background-color: #f9f9f9;
  width: 100%;
  border-radius: 2px;
}

.text {
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
}

.heading {
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: bold;
}

.secondary {
  color: #888888;
}
```
