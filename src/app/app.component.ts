import { Component } from '@angular/core';
import { Product } from './product.models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'rodrigo';
  edad = 20;
  img = 'https://1.bp.blogspot.com/-ebAh7yqRhGQ/UK7hFAOsthI/AAAAAAAADmc/-TXHrWxzn4E/s1600/Escudo+de+Colombia+Duque.jpg'

  emojis: string [] = [ '😂' , '🐦', '🐳','🌮', '💚'];

  newEmoji: string = '';

  widthImg : number = 10;
  register = {
    name: '',
    email: '',
    password: ''
  }
  box = {
    width: 100,
    height: 100,
    background: 'red'
  }
  products : Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  onScroll( event: Event ) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onKeyup( event: Event ) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  AddEmoji() {
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }

  EliminarEmoji( i: number ) {
    this.emojis.splice(i, 1);
  }

  onRegister() {
    console.log(this.register)
  }
}
