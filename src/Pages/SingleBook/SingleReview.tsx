/* eslint-disable @typescript-eslint/no-explicit-any */
 
const SingleReview = ({data}: any) => {
  return (
    <div className="text-right">
        <h4 className="text-lg">{data?.rating} star rating</h4>
        <h4 className="text-lg">{data?.review}</h4>
        <h3>{data?.email}(user)</h3>
    </div>
  )
}

export default SingleReview