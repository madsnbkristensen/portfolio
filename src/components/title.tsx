interface TitleProps {
  text: string;
  tag: string;
}

export default function Title({ text, tag }: TitleProps) {
  if (tag === "h1") {
    return (
      <h1 className="xs:text-start xs:text-5xl text-center text-4xl font-bold text-white">
        {text}
      </h1>
    );
  } else if (tag === "h2") {
    return (
      <h2 className="xs:text-3xl text-2xl font-bold text-white">{text}</h2>
    );
  } else if (tag === "h3") {
    return <h3 className="text-l xs:text-2xl font-bold text-white">{text}</h3>;
  } else {
    return (
      <h4 className="text-xl font-bold text-white transition-all duration-200 group-hover:opacity-0">
        {text}
      </h4>
    );
  }
}
