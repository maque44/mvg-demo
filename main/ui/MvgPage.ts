import { By, PageElement } from '@serenity-js/web';

export const MvgPage = {
     userYourCertificateButton: () =>
    //PageElement.located(By.xpath("//div[@class='text-center btn-certificate-action-container m-10']/a[@id='btn_use_certificate']")).describedAs('boton del user your certifcate'),
     PageElement.located(By.xpath("//a[@id='btn_use_certificate']")).describedAs('boton del user your certifcate'),
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


}   