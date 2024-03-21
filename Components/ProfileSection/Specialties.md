# Specialties

This Component will be the fourth component in the left which will show the all the specialities of a particular company.

### Component Name - `<Specialties />`

This Component will be child component and will accept props given below from ProfileSection.

Props

```ts
interface IProps {
  specialties: String[];
}
```

Component Logic and props passing

```tsx
//Tag can be made as seperate component which will accepts color and name props. or can also be used from MUI.

//Note- we could have also created a modal where we could have fetched color or the specialty that defines it behaviour.
export const Specialties = (props: IProps) => {
  return (
    <div className="flex-col-big">
      <div className="heading">Specialties</div>
      <div className="specialties">
        {props.specialties.map((specialty: String) => {
          return (
            <Tag name={specialty} color={getColorBasedOnSpecialty(specialty)} />
          );
        })}
      </div>
    </div>
  );
};
```

Utils

```ts
//These icons can be made or picked and used.
export const getColorBasedOnSpecialty = (Specialty: String) => {
  ///some logic which defined the color of the tag.
};
```

CSS

```css
.specialties {
  display: grid;
  gap: 5px;
}
```
