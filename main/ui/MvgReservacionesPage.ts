import { By, PageElement } from '@serenity-js/web';

export const MvgReservacionesPage = {
     useCertificateButton: () =>
     PageElement.located(By.xpath("//a[@id='btn_action_BookNow']")).describedAs('boton del user your certifcate'),
     //PageElement.located(By.id('btn_action_BookNow')).describedAs('boton del use certifcate'),   
     inputCertificateFolio: () =>
     PageElement.located(By.xpath("//input[@id='auth_username']")).describedAs('campo certificado'),
     inputLastName: () =>
     PageElement.located(By.xpath("//input[@id='auth_password']")).describedAs('campo last Name'),
     getStartedButton: () =>
     PageElement.located(By.xpath("//*[@id='auth_login_mvg']")).describedAs('boton get started'),
     welcomeLabel: () =>
     PageElement.located(By.xpath("//p[@class='hero-content-subtitle']")).describedAs('Leyenda de bienvenida'),
     certifcateLabel: () =>
     PageElement.located(By.xpath("//span[@class='certificate-leyend']")).describedAs('Leyenda de certificado'),


     //Seleccionar Hotel
     selectHotelButton: () =>
     PageElement.located(By.xpath("//a[@id='btn_be_book_resort_MPG']")).describedAs('boton para seleccionar hotel de MPG'),
     //Seleccionar Fecha Mes siguiente
     travelCalendar: () =>
     PageElement.located(By.xpath("//a[@id= 'selector_date_icon']")).describedAs('caledario de viaje'),
     selectDateMonthNext: () =>
     PageElement.located(By.xpath("//span[@class= 'flatpickr-next-month']/*[@version='1.1']")).describedAs(' Seleccionar siguiente mes a viajar'),
     selectDay: () =>
     PageElement.located(By.xpath("//span[@class= 'flatpickr-day '][14]")).describedAs('Seleccion día checking'),
     confirmDate: () =>
     PageElement.located(By.xpath("//button[@onclick= 'flatpickrSetDate()']")).describedAs('Confirmo días de viaje')


     //span[@aria-label= 'July 11, 2024']



}   