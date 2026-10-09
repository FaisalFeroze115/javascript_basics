import './Task2.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Header from './components/Header'
import Book from './components/Book'

import {useState} from 'react'

export default function Task2() {
    let initialBooklist = [
        {
            id: 1,
            name: "JavaScript and Jquery",
            author: "Jon Duckett",
            price: 62,
            rating: 4,
            publicationYear: "2014",
            isFavorite: false,
        },
        {
            id: 2,
            name: "Learning React",
            author: "Alex Banks and Eve Porcello",
            price: 77,
            rating: 5,
            publicationYear: "2001",
            isFavorite: false,
        },
        {
            id: 3,
            name: "odoo 15 Development Cookbook",
            author: "Parth Gajjar",
            price: 45,
            rating: 4,
            publicationYear: "2019",
            isFavorite: true,
        },
        {
            id: 4,
            name: "Harry Potter and the Sorcerer's Stone",
            author: "J.K. Rowling",
            price: 99,
            rating: 5,
            publicationYear: "1997",
            isFavorite: false,
        },
        {
            id: 5,
            name: "Alchemist",
            author: "Paulo Coelho",
            price: 89,
            rating: 4,
            publicationYear: "1988",
            isFavorite: true,
        },
        {
            id: 6,
            name: "Life of Pi",
            author: "Yann Martel",
            price: 55,
            rating: 2,
            publicationYear: "2001",
            isFavorite: true,
        },
        {
            id: 7,
            name: "Headless Commerce in Action",
            author: "Emmanuel Straschnov",
            price: 68,
            rating: 4,
            publicationYear: "2020",
            isFavorite: false,
        },
        {
            id: 8,
            name: "A day in the life of Ivan Denisovich",
            author: "Aleksandr Solzhenitsyn",
            price: 37,
            rating: 3,
            publicationYear: "1962",
            isFavorite: false,
        },
        {
            id: 9,
            name: "My first book of alphabets",
            author: "Eric Carle",
            price: 50,
            rating: 3,
            publicationYear: "1999",
            isFavorite: false,
        },
    ]

    const [bookList, setBookList] = useState(initialBooklist)

    const searchBook = (searchTerm) => {

        if(searchTerm == "") {
            setBookList(initialBooklist)
            return
        }
        
        let searchResult = initialBooklist.filter((book)=>{
            if(book.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){ 
                return book
            }
        })

        setBookList(searchResult)

    }

    const makeFav = (id) => {
        let updatedBooks = bookList.map((book)=>{
            if(book.id == id){
                return {...book, isFavorite: !book.isFavorite}
            }else{
                return book
            }
        })

        setBookList(updatedBooks)
    }

    const sortBook = (sortTerm) => {
        console.log(sortTerm)

        if(sortTerm == "name_asc"){
            console.log("eededed")
            const newSortedBooks = [...bookList].sort((a, b) =>
                a.name.localeCompare(b.name)
            );

            setBookList(newSortedBooks)


        }else if(sortTerm == "name_desc"){
            const newSortedBooks = [...bookList].sort((a,b)=>{
                return b.name.localeCompare(a.name)
            })
            setBookList(newSortedBooks)

        }else if(sortTerm == "year_asc"){
            const newSortedBooks = [...bookList].sort((a,b)=>{
                return parseInt(a.publicationYear) - parseInt(b.publicationYear)
            })
            setBookList(newSortedBooks)


        }else if(sortTerm == "year_desc"){
            const newSortedBooks = [...bookList].sort((a,b)=>{
                return parseInt(b.publicationYear) - parseInt(a.publicationYear)
            })
            setBookList(newSortedBooks)

        }else{
            setBookList(initialBooklist)
        }

        /*

        [
            { name: "Book A", publicationDate: "25-04-2026" },
            { name: "Book B", publicationDate: "10-01-2024" },
            { name: "Book C", publicationDate: "15-08-2025" }
        ]

        const sortedBooks = [...bookList].sort((a, b) => {
            const [dayA, monthA, yearA] = a.publicationDate.split("-");
            const [dayB, monthB, yearB] = b.publicationDate.split("-");

            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);

            return dateA - dateB;
        });

        OR 

        if (sortTerm === "year_asc") {
            return [...bookList].sort(
                (a, b) => parseDate(a.publicationDate) - parseDate(b.publicationDate)
            );
        }
        
        
        */

    }

    return(
        <div
                className="body relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]"
            >
                <Nav />

                <main className="my-10 lg:my-14">

                    <Header searchBook={searchBook} sortBook={sortBook}/>

                    <div
                        className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {
                            bookList.map((book) => (
                                <Book key={book.id} book={book} makeFav={makeFav} />
                            ))
                        }
                    

                    </div>

                </main>

    
                <Footer />

         </div>
    )
}