// Створіть клас "Книга" (Book) з захищеними властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

class Book {
  constructor (title, author, year) {
    this._title = title
    this._author = author
    this._year = year
  }

  printInfo () {
    console.log(`${this._title} ${this._author} ${this._year}`)
  }

  get title () {
    return this._title
  }

  get author () {
    return this._author
  }

  get year () {
    return this._year
  }

  set title (newTitle) {
    if (typeof newTitle === 'string') {
      this._title = newTitle
    } else {
      console.log('Tittle must be a string!')
    }
  }

  set author (newAuthor) {
    if (typeof newAuthor === 'string') {
      this._author = newAuthor
    } else {
      console.log('Author must be a string!')
    }
  }

  set year (newYear) {
    if (typeof newYear === 'number') {
      this._year = newYear
    } else {
      console.log('Year must be number!')
    }
  }

  static findOldestBook (booksList) {
    let oldestBook = booksList[0]

    for (const book of booksList) {
      if (book.year < oldestBook.year) {
        oldestBook = book
      }
    }

    return oldestBook
  }
}

export default Book
