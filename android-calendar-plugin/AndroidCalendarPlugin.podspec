
  Pod::Spec.new do |s|
    s.name = 'AndroidCalendarPlugin'
    s.version = '0.0.1'
    s.summary = 'capacitor plugin for adding/editing events in the native android calendar'
    s.license = 'MIT'
    s.homepage = 'git@github.com:CivilianZero/AndroidCalendarPlugin.git'
    s.author = 'civilianzero'
    s.source = { :git => 'git@github.com:CivilianZero/AndroidCalendarPlugin.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end