# Contacts

This Component will be the last component in the left which will show the all the contact details of a individual of particular company with name.

### Component Name - `<Contacts />`

This Component will be child component and will accept props given below from ProfileSection.

Props

```ts
interface IProps {
  contacts: Contacts[];
}

//Note- Not Defined here for reference look up
interface Contact = {
  id: String;
  name: String;
  workAt: String;
  phone: String;
  gate: String;
};
```

Component Logic and props passing

```tsx
export const Contacts = (props: IProps) => {
  return (
    <div className="info-card">
      {props.contacts.map(
        (contact: Contact, index: Number, array: Contact[]) => {
          return (
            <div id={contact.id}>
              <div className="flex-col-small">
                <div className="text secondary">{contact.workAt}</div>
                <div className="text">{contact.name}</div>
                <div className="text">
                  {contact.phone}{" "}
                  {isDefined(contact.gate) && ` ${contact.gate}`}{" "}
                </div>
              </div>
              {index != array.length - 1 && <hr />}
            </div>
          );
        }
      )}
    </div>
  );
};
```
