# ImageGallery

This Component will be the third component in left side which will be a basically some pictures provided by the company to be displayed on their company overview page.

### Component Name - `<ImageGallery />`

This Component will be child component and will accept props given below from ProfileInfo.

Props

```ts
interface IProps {
  imageGallery: String[];
}
```

Component Logic and props passing

```tsx
//displays three images in a row but can also handle more images.
export const ImageGallery = (props: IProps) => {
  return (
    <div className="imageGallery">
      {props.imageGallery.map((image: String) => {
        return <img src={image} className="image" />;
      })}
    </div>
  );
};
```

CSS

```css
.image {
  height: 100px;
  width: 100px;
  border-radius: 5px;
}
.imageGallery {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
}
```
