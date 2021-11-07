import './index.scss'

export default function index({ children = '标题' }) {
  return <div className="my-header">{children}</div>
}
