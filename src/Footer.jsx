import './Footer.css'
const Footer = () => {
    return <>
       <div className="footer">
        <div className="footer-section1">
        <div className="footer-section1-1">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Disclosures</p>
            <p>Cookie Settings</p>
            <p>© AL Advisors Management Inc.</p>
        </div>
        <div className="footer-section1-2">
            <div className="linkedIn"><img src="linkedIn.png" alt="" /></div>
            <div className="Twitter"><img src="Twitter.png" alt="" /></div>
        </div>
       </div>
       <div className="footer-section2">
            <p>Disclaimer:</p>
            <p>The information contained herein is provided for informational and discussion purposes only and is not intended to be a recommendation for any investment, service, product, or other advice of any kind, and shall not constitute or imply an offer of any kind. Any investment opportunities and/or products or services shown here will only be completed pursuant to formal offering materials, a letter of intent, and/or any other agreements as determined by AngelList containing full details regarding risks, minimum investment, fees, and expenses of such transaction. The terms of any product, service, or particular investment opportunity, including size, costs, and other characteristics, are set forth in the applicable constituent documents for such product, service or particular investment opportunity and may differ materially from those presented in this presentation. Such terms are subject to change without notice. For more information on AngelList and its products and services, please see here.</p>
            <p>Quotes included in these materials related to AngelList's services should not be construed in any way as an endorsement of AngelList's advice, analysis, or other service rendered to its clients.</p>
            <p>“Assets on platform” refers to the amount of money being deployed by fund managers who use AngelList’s software, which includes fund administration services. This does not refer to any amount of money being deployed with or managed by AngelList’s affiliated exempt reporting adviser, AngelList Advisors, LLC (“AngelList Advisors”)</p>
       </div>
       </div>
    </>
}
export default Footer;