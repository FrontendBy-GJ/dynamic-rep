type RepGoalProps = {
  title: string;
  paragraph: string;
  img: string;
};
export default function RepGoalList({ title, paragraph, img }: RepGoalProps) {
  return (
    <li className="space-y-6">
      <div className="aspect-video">
        <div className="h-full w-full bg-slate-600" />
      </div>
      <div className="space-y-4 md:px-2 lg:px-0">
        <h3 className="font-semibold text-xl text-pretty xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm lg:text-base">{paragraph}</p>
      </div>
    </li>
  );
}
