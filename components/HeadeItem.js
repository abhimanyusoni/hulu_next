const HeadeItem = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center w-12 sm:w-20 hover:text-white">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <span className="tracking-widest group-hover:opacity-100 opacity-0 text-xs">
        {title}
      </span>
    </div>
  );
};

export default HeadeItem;
