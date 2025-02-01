interface TitleProps {
  text: string;
  tag: string;
}

export default function Title({ text, tag }: TitleProps) {
  if (tag === "h1") {
    return <h1 className="text-4xl font-bold text-white">{text}</h1>;
  } else if (tag === "h2") {
    return <h2 className="text-3xl font-bold text-white">{text}</h2>;
  } else {
    return <h3 className="text-2xl font-bold text-white">{text}</h3>;
  }
}
