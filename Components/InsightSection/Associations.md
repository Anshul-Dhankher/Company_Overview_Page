# Associations

This Component will be the last component which will give details of associations.

### Component Name - `<Associations />`

This Component will be child component and will accept props given below from InsightSection.

Props

```ts
interface IProps {
  associations: Association[];
}
```

For Reference

```ts
Association = {
  id: String;
  name: String;
  designation: String;
  profilePictureUrl: String;
};
```

Component Logic and props passing

```tsx
export const Associations = (props: IProps) => {
  return (
    <div className="flex-col-big">
      <div className="heading">Associations</div>
      <div className="flex-col-small">
        {props.associations.map((association: Association) => {
          return (
            <div className="grid-col-3-small" id={association.id}>
              /*Can be a custom component too */{" "}
              <img src={association.profilePictureUrl} className="avatar" />
              <div className="text">{association.name}</div>
              <div className="text secondary">{association.designation}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

```ts
export const getTagBasedOnStatus = (status: Boolean) => {
    return status?<ActiveTag />:<InactiveTag>;
};

export const getDateOnly=(date:Date)=>{
    return `${date.getDate()}/${date.getMonth()}/${date.getYear()}`
}
```

```css
.avatar {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  vertical-align: middle;
}
```
