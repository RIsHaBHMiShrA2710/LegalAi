import { React, useState } from 'react';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCol, CRow, CModal, CModalHeader, CModalBody, CModalFooter, CModalTitle } from '@coreui/react';
import './pdfPage.css';

const cardsData = [
  {
    id: 1,
    imageSrc: "https://www.msmex.in/learn/wp-content/uploads/2020/10/3-major-labour-law-changes-in-india-2020-19.jpg",
    title: "Power of Attorney (POA)",
    text: "A power of attorney or letter of attorney is a written authorization to represent or act on another's behalf in private affairs, business, or some other legal matter.",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  },
  {
    id: 2,
    imageSrc: "https://www.legaleraonline.com/h-upload/2021/03/10/436204-child-custody.webp",
    title: "Application for Child Custody",
    text: "In case of a minor child, both the parents have an equal right over the child after divorce.",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  },
  {
    id: 3,
    imageSrc: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221013161257/partnership1.png",
    title: "Partnership Agreements",
    text: "A Partnership is defined by the Indian Partnership Act, 1932, as ‘the relation between persons who have agreed to share profits of the business carried on by all or any of them acting for all’. Agreement is the essential part of partnership business. It secure the right of both party. ",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  },
  {
    id: 4,
    imageSrc: "https://blog.ipleaders.in/wp-content/uploads/2017/02/agreement-303221_960_720.png",
    title: "Hire Purchase Agreements",
    text: "A contract of hire, is governed by the provisions of Chapter IX of the Indian Contract Act. It usually covers the common day finance agreements like purchase of consumer durables like Motor Vehicles, Computers, Household appliances like Televisions, Refrigerators etc.",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  },
  {
    id: 5,
    imageSrc: "https://www.legalfreedom.in/wp-content/uploads/2020/03/depositphotos_73633943-stock-illustration-legal-notice-stamp-800x445.jpg",
    title: "Legal Notice",
    text: "A legal notice is a written communication that the affected party sends to the opposing party, informing them of the legal action they plan to take against them.",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  },
  {
    id: 6,
    imageSrc: "https://miro.medium.com/v2/resize:fit:640/format:webp/1*-xVpg57Jl6ScviBr5WgU7g.png",
    title: "Wills",
    text: "A will or testament, also known as Vasiyat, is a legal declaration by which a person, the testator, names one or more persons to manage his or her estate and provides for the distribution of his or her property at death. For the devolution of property not disposed of by will, see inheritance and intestacy.",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  },
  {
    id: 7,
    imageSrc: "https://www.legalmatch.com/cmswp/images/2013/09/Settlement-Title-On-Legal-Documents.png",
    title: "Legal Settlements",
    text: "In law, a settlement is a resolution between disputing parties about a legal case, reached either before or after court action begins. A collective settlement is a settlement of multiple similar legal cases.",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  },
  {
    id: 8,
    imageSrc: "https://www.legalindia.com/wp-content/uploads/2016/03/affidavit.jpg",
    title: "Affidavit",
    text: "An affidavit is a written sworn statement of fact voluntarily made by an affiant or deponent under an oath or affirmation administered by a person authorized to do so by law.",
    pdf_link: "https://vit.ac.in/files/format-for-affidavit.pdf"
  }

];

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substr(0, maxLength) + '...';
  }
  return text;
};


const PdfPage = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalPdfLink, setModalPdfLink] = useState('');


  const toggleExpandCard = (cardId) => {
    setExpandedCardId(cardId === expandedCardId ? null : cardId);
  };

  const openModal = (card) => {
    setModalTitle(card.title);
    setModalPdfLink(card.pdf_link);
    setVisible(true);
  };

  return (
    <div className="pdf-page-container">
      <CRow xs={{ cols: 3 }} md={{ cols: 3 }} lg={{ cols: 4 }} className="custom-card-row">
        {cardsData.map(card => (
          <CCol key={card.id} xs={12} md={4} className="custom-card-col">
            <CCard className="custom-card h-100">
              <CCardImage orientation="top" src={card.imageSrc} className="custom-card-image" />
              <CCardBody>
                <CCardTitle>{card.title}</CCardTitle>
                <hr />
                <CCardText>
                  {expandedCardId === card.id ? card.text : truncateText(card.text, 80)}
                  {card.text.length > 50 && (
                    <span
                      className="expand-link"
                      onClick={() => toggleExpandCard(card.id)}
                    >
                      {expandedCardId === card.id ? 'Read Less' : 'Read More'}
                    </span>
                  )}
                </CCardText>
                <CButton
                  color="info"
                  className="preview-button"
                  onClick={() => openModal(card)}
                >
                  Preview
                </CButton>
                <CButton color="success" className="download-button" onClick={() => window.open(card.pdf_link, '_blank')}>
                  Download
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>

      <CModal fullscreen alignment="center" scrollable visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{modalTitle}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className='iframe_pdf'>
            <iframe title="pdf_Preview" src={modalPdfLink}></iframe>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default PdfPage;
