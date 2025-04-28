import { useState, useEffect } from 'react';
import { Database, Server, Network, Users, Code, Globe, CircleDollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const ImageCarousel = () => {
  const images = [
    'partner/AI 1.jpeg',
    'partner/AI 2.jpeg',
    'partner/AI 3.jpeg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-2 rounded-lg bg-white backdrop-blur relative aspect-[25/15] w-full overflow-hidden group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 p-[7%] transition-transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' :
            index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
        >
          <img
            src={image}
            alt={`Portfolio ${index + 1}`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/centerimg.jpg')" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            Building the future of AI Infrastructure
          </h1>
          {/* <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            Partnering with exceptional founders and management teams
            with flexible private equity and debt capital to build
            enduring technology businesses over time.
          </p> */}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center text-blue-600">
            /About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Overview"
              description="InnoMatrix designs, develops and operates next-generation AI data centers and private high-performance AI Inference infrastructure engineered for artificial intelligence (AI), high-performance computing (HPC) and blockchain applications."
              icon={Globe}
            />
            <FeatureCard
              title="Data Centers"
              description={
                <>
                  Artificial Intelligence<br />
                  Hosting infrastructure for most demanding compute workloads serving AI training, fine tuning and inference workloads.<br /><br />
                  Block Chain<br />
                  Ultra-low power cost and maximum cooling efficiency with specialized modular data centers for blockchain infrastructure and mining companies.
                </>
              }
              icon={Server}
            />
            <FeatureCard
              title="Private Inference"
              description={
                <>
                  InnoMatrix empowers organizations with private, high-performance AI inference capabilities that combine the security of on-premise control with cloud-native scalability.<br /><br />
                  Achieve record-breaking inference performance with industry-leading Time-To-First-Token (TTFT) latency and throughput, powered by SGLang-optimized software stacks.<br /><br />
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                    <span className="mr-2">Proud sponsors of</span>
                    <img src="/sglang logo.png" alt="sglang" className="h-12" />
                    </div>
                </div>
                </>
              }
              icon={Code}
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="partners" className="py-24 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-12">
            /AI Data Centers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Server className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Data Centers: Proprietary Process Re-engineered for AI</h3>
              <p className="text-blue-100 mb-2">InnoMatrix delivers build-to-suit, modular Tier 3+ data centers optimized for AI workloads, with a ~12 month lead time with industry leading total cost of ownership.</p>
              <div className="rounded-lg bg-white backdrop-blur relative w-full overflow-hidden flex items-center justify-center p-0">
                <img
                  src="/texas.jpeg"
                  alt="InnoMatrix"
                  className="max-w-full max-h-full object-contain rounded-lg m-0"
                // style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
            <div>
              <div className="p-6 rounded-lg bg-white/10 backdrop-blur mb-4">
                <ImageCarousel />
              </div>
              <p className="mt-1 text-blue-100 text-left">
                Custom-built facilities designed to handle intensive AI, HPC and inference workloads. Our data centers combine industry-leading power density (up to 132 kw/rack), advanced cooling systems and scalable, cost-efficient energy solutions to deliver the infrastructure needed by hyperscale and enterprise clients to run the most demanding AI/ML applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="infrastructure" className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold mb-6 text-blue-600">/Blockchain Data Centers</h2>
              <p className="text-lg text-blue-600/80 mb-8">
                InnoMatrix owns and operates multiple data centers across Texas, providing state-of-the-art, purpose-built data centers for blockchain mining customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600/80">Full turnkey hosting solution for large scale blockchain and bitcoin mining</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600/80">Innovative power management solutions for highest electricity efficiency and lowest costs</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-lg shadow-2xl flex items-center justify-center">
                <img
                  src="/Blockchain1.jpeg"
                  alt="Blockchain Data Center"
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-6">/Private LLM Inference Platform</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h4 className="text-lg mb-8 font-bold">
                Secure, High-Performance AI Inference
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mb-4 flex-shrink-0" />
                  <p>
                    Deploy dedicated NVIDIA GPU clusters to run private LLMs (including DeepSeek-R1, Llama, and custom models) on-premises or utilize our private cloud infrastructure in Texas-based Tier III+ data centers with full control over sensitive AI workloads
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <p>Achieve record-breaking inference performance with industry-leading Time-To-First-Token (TTFT) latency and throughput, powered by SGLang-optimized software stacks</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <p>Reduce AI costs with proprietary energy-efficient infrastructure and hardware/software co-designed systems, delivering unmatched TCO savings vs. public cloud providers</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <p>Ensure enterprise-grade security with full control over sensitive IP and regulated datasets and SOC 2, HIPAA, and GDPR compliance</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <p>Guarantee 99.95% SLA-backed reliability with ISO 27001, NIST 800-53, and audit-ready compliance for scalable operations</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <h4 className="text-lg mb-8 font-bold">
                Cost-Optimized Pricing Models
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <p>
                    InnoMatrix offers two tailored pricing strategies to maximize value for your AI workloads, whether you prioritize flexibility or predictable scaling.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <p><b>Pay-Per-Token Pricing.</b> Ideal for variable workloads with granular control over AI spend.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <p><b>Unlimited Inference Subscription.</b> Fixed monthly cost for dedicated NVIDIA GPU clusters, delivering unlimited throughput and consistent performance for high-volume AI operations. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold mb-12 text-blue-600">/Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="/team/texas.jpg"
                alt="Texas"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Texas Core Footprint</h3>
              <p className="text-blue-600/80 text-left">Operating from Texas, Massachusetts and Washington with global partnerships</p>
            </div>
            <div className="p-6">
              <img
                src="/team/tech native.jpg"
                alt="Tech Native"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Technology Native</h3>
              <p className="text-blue-600/80 text-left">Experienced operators from and investors in companies such as Microsoft, Google, Amazon, Nvidia, AMD, Verizon, Intel and Zoox</p>
            </div>
            <div className="p-6">
              <img
                src="/team/team.jpg"
                alt="Team"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-blue-600">World Class Team</h3>
              <p className="text-blue-600/80 text-left">Uniquely integrating AI/technology, private equity, credit and real estate investment skillsets with long-standing HPC and blockchain data center design, development and operating experience</p>
            </div>
            <div className="p-6">
              <img
                src="/team/contact us.jpg"
                alt="Contact Us"
                className="w-full h-48 object-cover roun</div>ded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-blue-600">Contact Us</h3>
              <p className="text-blue-600/80 text-left">Innomatrix LLC</p>
              <p className="text-blue-600/80 text-left"><br />MA Office:<br />101 Middlesex Turnpike, Burlington MA 01803</p>
              <p className="text-blue-600/80 text-left"><br />TX Office:<br />11420 HWY 36, Comanche TX, 76442</p>
              <p className="text-blue-600/80 text-left"><br />rfp@innomatrix.ai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-blue-600 border-t border-blue-100 py-12 w-full flex-shrink-0 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left whitespace-nowrap">
              © 2025 Innomatrix LLC.  All rights reserved.
            </p>
            <p className="text-sm text-center md:text-right whitespace-nowrap">
              Dallas | Boston | Seattle
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
