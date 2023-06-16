function CategoriesItem({img_url, img_sub, text, clickHandler}) {

  const handleClick = (e) => {
    // tetiklenmenin yayılmasını engelliyor?
    e.stopPropagation();
    clickHandler();
  };

  return (
    
    <div onClick = {handleClick} className="flex flex-col w-53 items-center justify-center cursor-pointer sm:border-b sm:border-solid sm:border-current sm:mb-4">
      <img src={img_url} alt={img_sub} />
      <span>{text}</span>
    </div>
  );
}

export default CategoriesItem;
