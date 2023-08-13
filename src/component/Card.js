import React from 'react'
import { toast } from 'react-toastify';
import { FcLike,FcLikePlaceholder } from "react-icons/fc"

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  
  function clickhandler(){
    
      if(likedCourses.includes(course.id)){
        // already liked course
        setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)))
        toast.warning("Like Removed")
      }
      else{
        // not liked course
        // insert into liked list
        if(likedCourses.length === 0){
          setLikedCourses([course.id])
        }
        else{
          // non empty phle se
          setLikedCourses((prev) => [...prev, course.id])
        }
        toast.success("Liked Successfully")
      }
  }

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
        <div className='relative'>
            <img src={course.image.url} alt=""/>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center '>

                <button onClick={clickhandler}>
                {
                  likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                }
                </button>

            </div>
        </div>
        <div className='p-4'>
            <p className=' text-white font-semibold text-lg leading-6'>{course.title}</p>

            <p className='mt-2 text-white'> 
              {
                course.description.length > 100 ? (course.description.substring(0,100)+ '...') : (course.description)
              }
            </p>
        </div>
    </div>
  )
}

export default Card;