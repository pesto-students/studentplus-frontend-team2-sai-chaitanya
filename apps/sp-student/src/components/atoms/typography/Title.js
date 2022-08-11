import { Skeleton, Typography } from "antd"

const Title = ({ children, level }) => {
  return (
    <Typography.Title level={level}>
        {children ? (
            children
        ) : (
            <Skeleton.Input active />
        )}
    </Typography.Title>
  )
}

export default Title