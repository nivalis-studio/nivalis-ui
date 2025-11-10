type Props = {
  name: string;
};

export const ComponentPreview = ({ name }: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>This is a preview of the component.</p>
    </div>
  );
};
