import { Card } from "antd";

function MemberShip() {
  return (
   <>
         <h1 className="text-3xl p-5 font-bold text-center">MemberShip Plan</h1>
    <Card title="Card title" bordered={false} style={{ width: 300 }} className="bg-gray-200">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
   </>
  );
}
export default MemberShip;