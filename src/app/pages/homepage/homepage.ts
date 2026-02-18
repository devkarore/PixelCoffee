import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Header } from '../../components/header/header';
import { APropos } from '../../components/apropos/apropos';
import { LaCarte } from '../../components/la-carte/la-carte';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';


@Component({
  selector: 'app-homepage',
  imports: [Navbar, Header, APropos, LaCarte, Contact, Footer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}
