import phone from "../assets/images/phone.svg";
import ticket from "../assets/images/ticket.svg";
import address from "../assets/images/address.svg";
import direction from "../assets/images/direction.svg";

function Contact() {
  return (
    <div className="flex flex-col gap-5 w-fit sm:mt-4">
      <a href="tel:+224 235 15 70" className="flex justify-start gap-2">
        <img src={phone} alt="phone" />
        <div className="flex flex-col">
          <span className="lg:text-lg text-base font-bold">Venue Phone</span>
          <span className="lg:text-sm text-xs opacity-70">
            Support number +224 235 15 70
          </span>
        </div>
      </a>
      <a href="tel:0850 333 99 11" className="flex justify-start gap-2">
        <img src={ticket} alt="ticket" />
        <div className="flex flex-col">
          <span className="lg:text-lg text-base font-bold">Ticket Cancellation</span>
          <span className="lg:text-sm text-xs opacity-70">
            Biletinial Support 0850 333 99 11
          </span>
        </div>
      </a>
      <address>
        <a
          href="https://goo.gl/maps/igmaKg3Yr3TMMRU17"
          rel="noreferrer"
          target="_blank"
          className="flex justify-start gap-2"
        >
          <img src={address} alt="address" />
          <div className="flex flex-col">
            <span className="lg:text-lg text-base font-bold">Address</span>
            <span className="lg:text-sm text-xs opacity-70">
              Gümüşsuyu Mahallesi Mete CD Beyoğlu/İstanbul
            </span>
          </div>
        </a>
      </address>
      <div className="flex justify-start gap-2">
        <img src={direction} alt="direction" />
        <div className="flex flex-col">
          <span className="lg:text-lg text-base font-bold">12 min with car</span>
          <span className="lg:text-sm text-xs opacity-70">
            Icing tiramisu topping cake halvah muffin tart
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
