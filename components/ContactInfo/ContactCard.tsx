import React from 'react';
import './ContactCard.scss';

interface Contact {
  name: string;
  designation: string;
  phoneNumber: string;
  email: string;
  photo: string;
}

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const handleCall = (phoneNumber: string) => {
    console.log(`Calling ${phoneNumber}`);
  };

  const handleMail = (email: string) => {
    console.log(`Sending email to ${email}`);
  };

  return (
    <div className="ContactCard">
      <img className="ContactCard__photo" src={contact.photo} alt={contact.name} />
      <h3 className="ContactCard__name">{contact.name}</h3>
      <p className="ContactCard__designation">{contact.designation}</p>
      <div className="ContactCard__button--call" onClick={() => handleCall(contact.phoneNumber)}>
        <p>Place a Call</p>
        <div className="ContactCard__arrow1"></div>
      </div>
      <div className="ContactCard__button--mail" onClick={() => handleMail(contact.email)}>
        <p>Mail</p>
        <div className="ContactCard__arrow"></div>
      </div>
    </div>
  );
};

const contacts: Contact[] = [
  {
    name: 'Santhosh',
    designation: 'Development Team Lead',
    phoneNumber: '123-456-7890',
    email: 'santhosh.abcd@example.com',
    photo: "/Images/profile_image.png",
  },
  {
    name: 'Santhosh',
    designation: 'Development Team Lead',
    phoneNumber: '123-456-7890',
    email: 'santhosh.abcd@example.com',
    photo: "/Images/profile_image.png",
  },
];

const ContactCardList: React.FC = () => (
  <div>
    {contacts.map((contact, index) => (
      <ContactCard key={index} contact={contact} />
    ))}
  </div>
);

export default ContactCardList;
