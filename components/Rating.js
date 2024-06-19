import Image from "next/image";

export default function Rating() {
    return (
        <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <Image src='/img/rating-star.png' width={20} height={20} alt='5 Star Rating' />
            <Image src='/img/rating-star.png' width={20} height={20} alt='5 Star Rating' />
            <Image src='/img/rating-star.png' width={20} height={20} alt='5 Star Rating' />
            <Image src='/img/rating-star.png' width={20} height={20} alt='5 Star Rating' />
            <Image src='/img/rating-star.png' width={20} height={20} alt='5 Star Rating' />
        </div>
    )
}