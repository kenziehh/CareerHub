export default function Card({ children, className }) {
    return (
      <div className={`p-[2rem] rounded-2xl bg-white border border-gray-300 flex-col justify-start items-start gap-10 inline-flex ${className}`}>
        {children}
      </div>
    );
  }
  