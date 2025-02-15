interface TitleProps {
  text: string;
  tag: string;
}

export default function Title({ text, tag }: TitleProps) {
  if (tag === "h1") {
    return <h1 className="text-5xl font-bold text-white">{text}</h1>;
  } else if (tag === "h2") {
    return <h2 className="text-3xl font-bold text-white">{text}</h2>;
  } else if (tag === "h3") {
    return <h3 className="text-2xl font-bold text-white">{text}</h3>;
  } else {
    return (
      <h4 className="text-xl group-hover:opacity-0 font-bold text-white transition-all duration-200">
        {text}
      </h4>
    );
  }
}
