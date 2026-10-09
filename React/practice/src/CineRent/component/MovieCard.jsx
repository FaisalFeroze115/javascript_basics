import star from "../../assets/cine_rent/star.svg"
import movie1 from "../../assets/cine_rent/movie-1.png"
import tag from "../../assets/cine_rent/tag.svg"

const MovieCard = ({movie}) => {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <img className="w-full object-cover" src={movie.image} alt="" />
        <figcaption className="pt-4">
            <h3 className="text-xl mb-1">Iron Man</h3>
            <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
            <div className="flex items-center space-x-1 mb-5">
                <img src={star} width="14" height="14" alt="" />
                <img src={star} width="14" height="14" alt="" />
                <img src={star} width="14" height="14" alt="" />
                <img src={star} width="14" height="14" alt="" />
                <img src={star} width="14" height="14" alt="" />
            </div>
            <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#">
                <img src={tag} alt="" />
                <span>$100 | Add to Cart</span>
            </a>
        </figcaption>
    </figure>
  )
}

export default MovieCard