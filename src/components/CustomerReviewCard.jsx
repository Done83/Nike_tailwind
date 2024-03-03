import { star } from '../assets/icons';

/* eslint-disable no-unused-vars */
const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        width={120}
        height={120}
        className="rounded-full object-cover"
      />

      <p className="mt-6 max-w-sm text-center info-text">
        {feedback}
      </p>
      <div className='mt-3 mb-2 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
      </div>
      <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};
export default CustomerReviewCard;
