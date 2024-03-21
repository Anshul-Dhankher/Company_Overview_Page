# Directory

This Component will be the fifth component in left side which will be a card showing us the details for phone, address, website and open to close details.

### Component Name - `<Directory />`

This Component will be child component and will accept props given below from ProfileSection.

Props

```ts
interface IProps {
  directory: Directory;
}

//Note- Not defined here but for reference looking up
interface Directory {
  opensAt: Date;
  closesAt: Date;
  phone: String;
  address: String;
  website: String;
}
```

Component Logic and props passing

```tsx
export const Directory = (props: IProps) => {
  return (
    <div className="flex-col-big">
      /*Suggestion - Details doesn't convey a right message */
      <div className="heading">Details</div>
      <div className="info-card flex-col-small">
        <div className="text secondary">Hours</div>
        <div className="text">
          {getTimeOnly(props.openAt)} - {getTimeOnly(props.closesAt)}
        </div>
        <div>
          {getIsOpenCloseStatusBasedOnDuration(props.openAt, props.closesAt) ? (
            <span style={{ color: green }}>OPEN</span>
          ) : (
            <span style={{ color: red }}> CLOSED</span>
          )}
        </div>
      </div>
      <div className="info-card">
        <div className="flex-col-small">
          <span className="text secondary">Phone</span>
          <span className="text">{props.directory.phone}</span>
        </div>
        <div className="flex-col-small">
          <span className="text secondary">Address</span>
          <span className="text">{props.directory.address}</span>
        </div>
        <div className="flex-col-small">
          <span className="text secondary">Website</span>
          <a href={props.directory.website}>{props.directory.website}</span>
        </div>
      </div>
    </div>
  );
};
```

Utils

```ts
//function to displayTimeOnly
export const displayTimeOnly = (date: Date) => {
  return `${date.getHours()}:${date.getMinutes()}`;
};

//function to get Status is the company open or close
export const getIsOpenCloseStatusBasedOnDuration = (
  opensAt: Date,
  closesAt: Date
) => {
  const timeNow = new Date();
  const currentTimeInMinutes = timeNow.getHours() * 60 + timeNow.getMinutes();
  const openingTimeInMinutes = openAt.getHours() * 60 + openAt.getMinutes();
  const closingTimeInMinutes = closesAt.getHours() * 60 + closesAt.getMinutes();

  return (
    currentTimeInMinutes >= openingTimeInMinutes &&
    currentTimeInMinutes <= closingTimeInMinutes
  );
};
```
