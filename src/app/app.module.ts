import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './atoms/title/title.component';
import { PosterComponent } from './atoms/poster/poster.component';
import { TextComponent } from './atoms/text/text.component';
import { StarComponent } from './atoms/star/star.component';
import { InputComponent } from './atoms/input/input.component';
import { TitleWTextComponent } from './molecules/title-w-text/title-w-text.component';
import { SearchBarComponent } from './molecules/search-bar/search-bar.component';
import { SubtitleWElementComponent } from './molecules/subtitle-w-element/subtitle-w-element.component';
import { HeaderComponent } from './molecules/header/header.component';
import { FooterComponent } from './molecules/footer/footer.component';
import { MovieBlockComponent } from './organisms/movie-block/movie-block.component';
import { MainLayoutComponent } from './templates/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeartComponent } from './atoms/heart/heart.component';
import { FavoriteButtonComponent } from './molecules/favorite-button/favorite-button.component';
import { StoreModule } from '@ngrx/store';
import { moviesDataReducer } from './store/movies-data.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FavoritesListComponent } from './organisms/favorites-list/favorites-list.component';
import { RatingComponent } from './molecules/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PosterComponent,
    TextComponent,
    StarComponent,
    InputComponent,
    TitleWTextComponent,
    SearchBarComponent,
    SubtitleWElementComponent,
    HeaderComponent,
    FooterComponent,
    MovieBlockComponent,
    MainLayoutComponent,
    HomeComponent,
    HeartComponent,
    FavoriteButtonComponent,
    FavoritesListComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      moviesData: moviesDataReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
