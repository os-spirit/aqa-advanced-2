// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Перевизначте метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

import Book from './ts1_class_book.js'

class EBook extends Book {
  constructor (title, author, year, fileFormat) {
    super(title, author, year)
    this._fileFormat = fileFormat
  }

  printInfo () {
    super.printInfo()
    console.log(`${this._fileFormat}`)
  }

  get fileFormat () {
    return this._fileFormat
  }

  set fileFormat (newFileType) {
    if (typeof newFileType === 'string') {
      this._fileFormat = newFileType
    } else {
      console.log('File format must be a string!')
    }
  }

  static fromBook (book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat)
  }
}

export default EBook
