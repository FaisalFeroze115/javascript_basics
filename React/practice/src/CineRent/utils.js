import avatar from "../assets/cine_rent/movie-covers/avatar.png"
import ironMan from "../assets/cine_rent/movie-covers/iron-man.png"
import marriageStory from "../assets/cine_rent/movie-covers/marriage-strory.jpg"
import onceHo from "../assets/cine_rent/movie-covers/once-in-ho.jpg"
import painNgain from "../assets/cine_rent/movie-covers/pain-and-gain.jpg"
import parasite from "../assets/cine_rent/movie-covers/parasite.jpg"

export function initialData(){
    return [
            {
                id: 1,
                name: "Iron Man",
                description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                genre: "Action/Adventure/Sci-fi",
                rating: 5,
                price: 100,
                image: ironMan
            },
            {
                id: 2,
                name: "Avatar",
                description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                genre: "Action/Adventure/Sci-fi",
                rating: 5,
                price: 120,
                image: avatar
            },
            {
                id: 3,
                name: "Marriage Story",
                description: "Noah Baumbach's incisive and compassionate look at a marriage breaking down and a family staying together.",
                genre: "Drama/Romance",
                rating: 4,
                price: 80,
                image: marriageStory
            },
            {
                id: 4,
                name: "Once Upon a Time in Hollywood",
                description: "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
                genre: "Comedy/Drama",
                rating: 4,
                price: 90,
                image: onceHo
            },
            {
                id: 5,
                name: "Pain & Gain",
                description: "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
                genre: "Action/Comedy/Crime",
                rating: 3,
                price: 70,
                image: painNgain
            },
            {
                id: 6,
                name: "Parasite",
                description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
                genre: "Drama/Thriller",
                rating: 5,
                price: 110,
                image: parasite
            }
        ]

}