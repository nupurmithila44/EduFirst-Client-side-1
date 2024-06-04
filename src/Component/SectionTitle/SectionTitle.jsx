

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-4">  
        <h3 className="text-3xl uppercase border-y-4 py-4 font-bold">{heading}</h3>
        <h3 className="text-yellow-600 mb-2 ">{subHeading}</h3>
    </div>
    );
};

export default SectionTitle;