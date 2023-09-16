import PropTypes from 'prop-types'

const Course = ({course,handleAddToCart}) => {

    const {img,title,desc,price,credit} = course;
    return (
        <div>
           <div className="card bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                     <img src={img} alt="Image" className="rounded-xl" />
                </figure>
            <div className="px-5 pt-2">
                <h2 className="text-base font-bold">{title}</h2>
                <p className="text-sm text-slate-500 pt-1">{desc}</p>
                <div className="flex justify-between pt-3">
                    <div>
                        <p className="text-slate-600 font-bold"><i className="fa-solid fa-dollar-sign"></i>&nbsp; Price : {price}</p>
                    </div>
                    <div >
                        <p className="text-slate-600 font-semibold"><i className="fa-solid fa-book-open"></i>&nbsp; Credit : {credit} hr</p>
                    </div>
                </div>
                <div className="py-3">
                    <button className="btn btn-sm btn-info w-full text-white" onClick={() =>handleAddToCart(course)}>Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

Course.propTypes = {

    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
};

export default Course;