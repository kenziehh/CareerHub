export default function Card({ children, className }) {
    return (
      <div className={`p-[30px] rounded-[20px] border border-gray-300 flex-col justify-start items-start gap-10 inline-flex ${className}`}>
        {children}
      </div>
    );
  }
  