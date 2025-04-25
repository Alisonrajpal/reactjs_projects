export default function Message() {
  const name = "Alison";
  return <div>{name ? `Hello ${name}` : "Hello World"}</div>;
}
