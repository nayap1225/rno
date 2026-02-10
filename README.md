# rno

## 트러블슈팅 (Troubleshooting)

### Windows에서 npm install 권한 문제

PowerShell의 실행 정책(Execution Policy)이 스크립트 실행을 제한하기 때문에 발생

#### 임시 해결 방법
`cmd` 사용
```bash
cmd /c npm install
```

#### 영구 해결 방법 (권장)
실행 정책을 변경. PowerShell을 열고(가능하면 관리자 권한으로, 하지만 CurrentUser 범위라 일반 권한도 가능) 실행:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```
이 설정은 현재 사용자에 한해 서명된 스크립트 실행을 허용.
