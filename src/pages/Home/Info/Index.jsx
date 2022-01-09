import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Toàn thành phố Đà Nẵng',
    description:
      'Chúng tôi sẽ giúp bạn tìm kiếm những ngôi nhà trên các quận/ huyện tại thành phố Đà Nẵng',
    icon: GlobeAltIcon,
  },
  {
    name: 'Giá cả hợp lý',
    description:
      'Giá cả tại đây, nơi chúng tôi cam kết sẽ hổ trợ bạn một cách tốt nhất ',
    icon: ScaleIcon,
  },
  {
    name: 'Nhanh như chớp',
    description:
      'Với đội ngũ thành viên đông đảo chúng tôi sẽ luôn hổ trợ kịp thời nhanh chóng, mọi lúc mọi nơi.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Hổ trợ mua, bán nhà',
    description:
      'Nếu bạn có nhu cầu mua, bán hay thuê nhà, đừng ngần ngại hay nhấc máy và alo cho chúng tôi.',
    icon: AnnotationIcon,
  },
]

export default function Index() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Nơi tốt nhất để tìm kiếm nhà
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Đến với dịch vụ của chúng tôi bạn chỉ cần nhấc máy và gọi 0854083118 sẽ có nhân viên tư vấn cho bạn mọi lúc mọi nơi.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}