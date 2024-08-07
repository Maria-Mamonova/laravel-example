@extends('layots.app')

@section('title-block')
    Контакты
@endsection

@section('content')
    <div id="content">
        <div class="the_end_1">
            <h1>Здравствуйте! Рада, что Вы зашли на эту страницу моего сайта. </h1>
            <div class="the_end_2">
                <div class="contacts">
                    <p>Если у вас остались вопросы касательно меня или моих услуг, с удовольствием на них отвечу! </p>
                    <p>Вы можете выбрать любой удобный для Вас вид связи со мной:</p>
                    <p>Мой телефон 1 (111) 111-11-11</p>
                    <p>E-mail: maria.orlowets@yandex.ru</p>
                    <p>Telegram:
                        <a href="https://t.me/Mari_Mamonova" title="Telegram">
                            t.me/Mari_Mamonova
                        </a>
                    </p>
                </div>
                <div class="contact">
                    <p>Или отправьте мне письмо прямо отсюда, заполнив форму ниже</p><br>

                    @if($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <form action={{route('contact-form')}} method="post">
                        @csrf

                        <input type="text" name="username" placeholder="Введите Ваше имя" class="contact-input">
                        <input type="email" name="email" placeholder="Введите Ваш Email" class="contact-input">
                        <input type="text" name="subject" placeholder="Введите тему письма" class="contact-input">
                        <textarea name="message"  placeholder="Задайте Ваш вопрос" class="contact-input"></textarea>
                        <input type="submit" value="Отправить" class="input_submit">
                    </form>
                </div>
            </div>
        </div>
        <div id="background_price">
            <h1>"Фотография — это способ, чувствовать, касаться,<br>
                любить. То что вы поймали на пленку запечатлено<br>
                навсегда... пленка запоминает мелочи, хранит<br>
                память о мелочах даже тогда, когда вы все забыли"</h1><br>
            <h1 class="aaron">Аарон Сискинд</h1>
        </div>
    </div>
@endsection
